//dados das funciomalidades da plataforma da nossa landing page
const images = import.meta.glob('../assets/image/*.png', { eager: true, as: 'url' });;

type ImageUrl = string | undefined;

export interface Pilar {
    id: number;
    icon: ImageUrl;
    title: string;
    descricao: string;
}

export const pilares : Pilar[] = [
{
    id: 1, 
    icon: images['../assets/image/iconFoco.png'], 
    title: "Foco Técnico", 
    descricao: "Módulos específicos para laboratórios e oficinas."
},
{
    id: 2,
    icon: images['../assets/image/iconDados.png'],
    title: "Dados Acionáveis",
    descricao:"Dashboards que mostram o desempenho individual."
},
{
    id: 3,
    icon: images['../assets/image/iconIntegracao.png'],
    title: "Integração Total",
    descricao: "Comunicação fluida entre coordenação e alunos."
},
{ 
    id: 4,
    icon: images['../assets/image/iconSeguranca.png'],
    title: "Segurança Robusta",
    descricao: "Dados protegidos com criptografia de ponta."
},

];

export default pilares;