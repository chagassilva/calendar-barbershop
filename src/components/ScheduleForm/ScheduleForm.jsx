import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaClock,
  FaCut,
  FaUserTie,
  FaStickyNote,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { MdDesignServices, MdMessage } from "react-icons/md";
import {
  ButtonContainer,
  FormContainer,
  FormItems,
  IconsContainer,
  InputContainer,
  MainContainer,
  SelectContainer,
  TextareaContainer,
} from "./style";

// Tabela de preços por serviço
const precosServicos = {
  Máquina: 20,
  Navalhado: 35,
  Degrade: 40,
  Social: 30,
};

// Mapeamento SKU por serviço
const skuMap = {
  Máquina: "7_Svs8C-p",
  Navalhado: "7_NZjcrHJ",
  Degrade: "7_NZ68CnG",
  Social: "7_SvtDy9n",
};

// Slug amigável para redirecionamento ou visualização
const slugMap = {
  Máquina: "corte-maquina",
  Navalhado: "corte-navalhado",
  Degrade: "corte-degrade",
  Social: "corte-social",
};

export function ScheduleForm({ selectedDate }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    horario: "",
    barbeiro: "",
    servico: "",
    observacao: "",
  });

  const [preco, setPreco] = useState(0);
  //const [sku, setSku] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "servico") {
      setPreco(precosServicos[value] || 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sku = skuMap[form.servico] || "SKU-NAO-DEFINIDO";
    const slug = slugMap[form.servico] || "slug-indefinido";

    const payload = {
      ...form,
      preco,
      sku,
      slug,
      statusPagamento: "Pendente", // 🔥 novo campo,
      data: selectedDate.toISOString().split("T")[0],
      agendamentoId: `AGD-${Date.now()}`,
    };

    try {
      const response = await fetch(
        "https://n8n.chagassilva.com/webhook/agendamento",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const json = await response.json();
      const data = Array.isArray(json) ? json[0] : json;

      console.log("Resposta do servidor:", data);

      if (data.status === "conflict" || data.status === "erro") {
        let mensagem = data.mensagem || "Esse horário já está reservado.";
        if (data.alternativas?.length) {
          mensagem += `\n\nHorários sugeridos: ${data.alternativas.join(", ")}`;
        }
        alert(mensagem);
      } else if (data.status === "success") {
        alert("Você será redirecionado para o pagamento.");
        window.location.href = data.productUrl || `https://pag.ae/${sku}`;
      } else {
        alert("Erro inesperado, tente novamente.");
      }
    } catch (err) {
      console.error("Erro ao conectar com o servidor:", err);
      alert("Erro ao conectar com o servidor.");
    }

    setLoading(false);
  };

  return (
    <MainContainer>
      <FormContainer>
        <FormItems onSubmit={handleSubmit} className="form">
          <IconsContainer>
            <FaUser />
          </IconsContainer>
          <InputContainer
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <IconsContainer>
            <FaWhatsappSquare />
          </IconsContainer>
          <InputContainer
            type="tel"
            name="telefone"
            placeholder="Didite seu telefone"
            value={form.telefone}
            onChange={handleChange}
            required
          />

          <IconsContainer>
            <Ri24HoursFill />
          </IconsContainer>
          <SelectContainer
            name="horario"
            value={form.horario}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o horário</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
          </SelectContainer>

          <IconsContainer>
            <MdDesignServices />
          </IconsContainer>
          <SelectContainer
            name="servico"
            value={form.servico}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o serviço</option>
            {Object.keys(precosServicos).map((servico) => (
              <option key={servico} value={servico}>
                {servico}
              </option>
            ))}
          </SelectContainer>

          {form.servico && (
            <p className="text-white-700 font-semibold text-[#fff]">
              Preço do serviço: R$ {preco.toFixed(2)}
              {/* <br/>
              SKU: {skuMap[form.servico] || "SKU não disponível"} */}
            </p>
          )}

          <IconsContainer>
            <FaUser />
          </IconsContainer>
          <SelectContainer
            name="barbeiro"
            value={form.barbeiro}
            onChange={handleChange}
            required
          >
            <option value="">Escolha o barbeiro</option>
            <option value="Santiago">Santiago</option>
            <option value="Carlos">Carlos</option>
          </SelectContainer>

          <IconsContainer>
            <MdMessage />
          </IconsContainer>

          <TextareaContainer
            name="observacao"
            placeholder="observacao"
            value={form.observacao}
            onChange={handleChange}
            rows={4}
          />

          <ButtonContainer
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-md transform ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#baa77f] hover:bg-[#a7946e] hover:scale-105"
            }`}
          >
            {loading ? "Enviando..." : "Confirmar Agendamento"}
          </ButtonContainer>
        </FormItems>
      </FormContainer>
    </MainContainer>
  );
}
