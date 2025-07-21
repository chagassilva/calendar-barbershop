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
  Tesoura: 35,
  Degrade: 40,
  Navalhado: 30,
  Barba: 25,
  "Corte Infantil": 15,
  "Corte Social": 30,
  Penteado: 45,
  Alisamento: 60,
  Tintura: 55,
  "Tratamento Capilar": 50,
  "Design de Sobrancelha": 25,
};

// Mapeamento SKU por serviço
const skuMap = {
  Máquina: "rbu7476",
  Tesoura: "adi1328",
  Degrade: "7_NZ68CnG",
  Navalhado: "7_NZjcrHJ",
  Barba: "FCL-BB-05",
  "Corte Infantil": "INF-001",
  "Corte Social": "SOC-002",
  Penteado: "FCL-PNT-03",
  Alisamento: "FCL-AL-04",
  Tintura: "FCL-TN-05",
  "Tratamento Capilar": "FCL-TC-06",
  "Design de Sobrancelha": "FCL-DS-07",
};

// Slug amigável para redirecionamento ou visualização
const slugMap = {
  Máquina: "corte-maquina",
  Tesoura: "corte-tesoura",
  Degrade: "corte-degrade",
  Navalhado: "corte-navalhado",
  Barba: "barba",
  "Corte Infantil": "infantil",
  "Corte Social": "social",
  Penteado: "penteado",
  Alisamento: "alisamento",
  Tintura: "tintura",
  "Tratamento Capilar": "tratamento",
  "Design de Sobrancelha": "sobrancelha",
};

export function ScheduleForm({ selectedDate }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    horario: "",
    barbeiro: "",
    servico: "",
    observacoes: "",
  });

  const [preco, setPreco] = useState(0);
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
        "https://n8n.chagassilva.com/webhook-test/agendamento",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.status === "conflict" || data.status === "erro") {
        let mensagem = data.mensagem || "Esse horário já está reservado.";
        if (data.alternativas?.length) {
          mensagem += `\n\nHorários sugeridos: ${data.alternativas.join(", ")}`;
        }
        alert(mensagem);
      } else if (data.status === "success") {
        alert(
          "Agendamento confirmado! Você será redirecionado para o pagamento."
        );
        window.location.href = `https://pag.ae/${sku}`; // Redirecionamento automático
      } else {
        alert("Erro inesperado, tente novamente.");
      }
    } catch (err) {
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
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
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
            <p className="text-gray-700 font-semibold">
              Preço do serviço: R$ {preco.toFixed(2)}
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
            name="observacoes"
            placeholder="Observações"
            value={form.observacoes}
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
