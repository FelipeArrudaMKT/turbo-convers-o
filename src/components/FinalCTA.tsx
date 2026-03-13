import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-indigo-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para transformar seus resultados?
            <br />
            Comece hoje mesmo.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            Não perca mais tempo com estratégias que não funcionam. Junte-se a centenas de empreendedores (fictícios) que já escalaram seus negócios.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#oferta"
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              Quero Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
