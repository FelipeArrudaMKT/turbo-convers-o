import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080?blur=10')] opacity-5 bg-cover bg-center"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 mb-8 ring-1 ring-inset ring-indigo-600/20">
          <ShieldCheck className="mr-2 h-4 w-4" />
          Página de Demonstração
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          Escale suas vendas online com o <span className="text-indigo-600">Turbo Conversão Pro</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Descubra o método (fictício) que ajudou centenas de empreendedores a otimizarem seus funis de vendas. Esta é uma página de exemplo para demonstrar uma estrutura de alta conversão.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#oferta"
            className="group inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Quero Aumentar Minhas Vendas
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="https://picsum.photos/seed/dashboard/1200/600"
              alt="Dashboard demonstrativo"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
