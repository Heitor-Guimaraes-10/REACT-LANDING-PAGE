//dados dos membros da equipe da nossa landing page

export interface MembroEquipe {
    id: number;
    nome: string;
    cargo: string;
    descricao: string;
}

export const equipe: MembroEquipe[] = [
    {
        id: 1,
        nome: "Heitor Guimarães",
        cargo: "Fundador e CEO",
        descricao: "Especialista em gestão educacional com 15 anos de experiência no setor técnico."
    },
    {
        id: 2,
        nome: "Bianca Paiva",
        cargo: "CTO",
        descricao: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados."
    },

    {   
        id: 3,
        nome: "Gustavo Barbosa",
        cargo: "Sucesso do Cliente",
        descricao: "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor."
    },

    {
        id: 4,
        nome: "Felipe Aragão",
        cargo: "Head de Produto",
        descricao: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia."
    }

    ];