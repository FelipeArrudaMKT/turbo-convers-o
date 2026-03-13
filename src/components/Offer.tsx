import { Check } from 'lucide-react';

export default function Offer() {
  const features = [
    'Acesso completo ao método Turbo Conversão',
    'Templates de páginas de alta conversão',
    'Scripts de vendas para WhatsApp',
    'Aulas práticas de tráfego pago',
    'BÔNUS: Planilha de acompanhamento de métricas',
    'BÔNUS: Masterclass de Copywriting',
  ];

  return (
    <section id="oferta" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Oferta Especial de Demonstração</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tenha acesso a todo o material necessário para transformar seus resultados online. Uma oferta fictícia criada para ilustrar o poder de uma boa proposta de valor.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Acesso Vitalício (Exemplo)</h3>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Ao garantir sua vaga hoje, você recebe acesso imediato a todos os módulos e bônus exclusivos.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">O que está incluso</h4>
              <div className="h-px flex-auto bg-slate-100"></div>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 sm:gap-6">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-slate-50 py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-slate-600">Pagamento único</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">R$ 497</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600">,00</span>
                </p>
                <p className="mt-2 text-sm text-slate-500">ou 12x de R$ 49,70</p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Garantir Minha Vaga Agora
                </a>
                <p className="mt-6 text-xs leading-5 text-slate-500">
                  Garantia incondicional de 7 dias. (Aviso: Botão inativo, apenas demonstração).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
