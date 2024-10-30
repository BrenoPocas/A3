import {
  CCollapse,
  CButton,
  CCardBody,
  CCard,
  CRow,
  CCol,
} from "@coreui/react";
import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";

function CollapseButton() {
  const [visibleA, setVisibleA] = useState(false);
  const [visibleB, setVisibleB] = useState(false);
  const [visibleC, setVisibleC] = useState(false);
  const [visibleD, setVisibleD] = useState(false);
  const [visibleE, setVisibleE] = useState(false);
  const [visibleF, setVisibleF] = useState(false);
  const [visibleG, setVisibleG] = useState(false);
  const [visibleH, setVisibleH] = useState(false);
  const [visibleI, setVisibleI] = useState(false);
  const [visibleJ, setVisibleJ] = useState(false);

  return (
    <>
      <CButton color="primary" onClick={() => setVisibleA(!visibleA)}>
        Como posso me cadastrar na plataforma?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleB(!visibleB)}>
        Quais informações são necessárias para criar um perfil?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleC(!visibleC)}>
        Como posso buscar por oportunidades de voluntariado? Posso filtrar por
        área de interesse, localização ou tipo de trabalho?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleD(!visibleD)}>
        Como funciona o processo de seleção para as vagas de voluntariado?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleE(!visibleE)}>
        A plataforma oferece algum tipo de treinamento ou orientação para os
        voluntários?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleF(!visibleF)}>
        Quais tipos de projetos as ONGs cadastradas oferecem?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleG(!visibleG)}>
        Qual é a duração média dos projetos de voluntariado?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleH(!visibleH)}>
        É possível realizar voluntariado remoto?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleI(!visibleI)}>
        Como posso entrar em contato com a ONG para tirar dúvidas sobre uma
        oportunidade?
      </CButton>
      <CButton color="primary" onClick={() => setVisibleJ(!visibleJ)}>
        Como posso obter um certificado de participação após concluir um
        projeto?
      </CButton>

      <CRow>
        <CCol xs={6}>
          <CCollapse visible={visibleA}>
            <CCard className="mt-3">
              <CCardBody>
                Para se cadastrar, basta clicar no botão "Cadastre-se" na página
                principal e preencher o formulário com seus dados pessoais, como
                nome, e-mail e senha.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleB}>
            <CCard className="mt-3">
              <CCardBody>
                Além dos dados pessoais, você precisará informar suas áreas de
                interesse, habilidades, disponibilidade de tempo e localização.
                Essas informações ajudarão a encontrar as oportunidades mais
                adequadas para você.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleC}>
            <CCard className="mt-3">
              <CCardBody>
                Utilize a ferramenta de busca da plataforma. Você poderá filtrar
                as oportunidades por área de interesse (meio ambiente, educação,
                saúde, etc.), localização (cidade, estado) e tipo de trabalho
                (online, presencial, curto prazo, longo prazo).
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleD}>
            <CCard className="mt-3">
              <CCardBody>
                O processo de seleção varia de acordo com a ONG. Algumas podem
                realizar entrevistas, enquanto outras solicitam apenas o envio
                de um currículo. A plataforma irá te notificar sobre os próximos
                passos após sua inscrição.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleE}>
            <CCard className="mt-3">
              <CCardBody>
                Não, mas muitas ONGs oferecem treinamentos e orientações aos
                seus voluntários. Você poderá encontrar essas informações na
                descrição de cada projeto.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleF}>
            <CCard className="mt-3">
              <CCardBody>
                As ONGs cadastradas oferecem uma variedade de projetos, desde
                atividades de apoio a comunidades carentes até projetos de
                preservação ambiental.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleG}>
            <CCard className="mt-3">
              <CCardBody>
                A duração dos projetos varia muito, podendo ser desde um dia até
                vários meses. Você encontrará essa informação na descrição de
                cada projeto.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleH}>
            <CCard className="mt-3">
              <CCardBody>
                Sim, muitas ONGs oferecem oportunidades de voluntariado remoto.
                Utilize os filtros de busca para encontrar essas oportunidades.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleI}>
            <CCard className="mt-3">
              <CCardBody>
                Você encontrará os dados de contato da ONG diretamente na
                descrição do projeto.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>

        <CCol xs={6}>
          <CCollapse visible={visibleJ}>
            <CCard className="mt-3">
              <CCardBody>
                Ao finalizar um projeto, você poderá solicitar um certificado de
                participação à ONG.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
      </CRow>
    </>
  );
}

export default CollapseButton;
