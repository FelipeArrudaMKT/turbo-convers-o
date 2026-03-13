import { TrendingUp, Users, Zap, Target, BarChart3, Lock } from 'lucide-react';

const benefits = [
  {
    name: 'Aumento de Conversão',
    description: 'Estratégias desenhadas para transformar visitantes curiosos em clientes pagantes de forma otimizada.',
    icon: TrendingUp,
  },
  {
    name: 'Tráfego Qualificado',
    description: 'Aprenda a atrair o público certo que realmente tem interesse no seu produto ou serviço.',
    icon: Users,
  },
  {
    name: 'Implementação Rápida',
    description: 'Templates e scripts prontos para você copiar, colar e ver os resultados em tempo recorde.',
    icon: Zap,
  },
  {
    name: 'Foco no Público-Alvo',
    description: 'Comunicação assertiva que conversa diretamente com as dores e desejos do seu cliente ideal.',
    icon: Target,
  },
  {
    name: 'Métricas Claras',
    description: 'Saiba exatamente o que medir e como interpretar os dados para escalar com segurança.',
    icon: BarChart3,
  },
  {
    name: 'Método Seguro',
    description: 'Abordagens testadas e validadas no mercado, sem promessas irreais ou atalhos perigosos.',
    icon: Lock,
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Por que escolher o Turbo Conversão Pro?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tudo que você precisa para escalar
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nossa metodologia (demonstrativa) foi estruturada para cobrir todos os pilares de um negócio digital de sucesso.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
