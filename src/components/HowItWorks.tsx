export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      name: 'Diagnóstico Inicial',
      description: 'Entenda o momento atual do seu negócio e identifique os principais gargalos de conversão.',
    },
    {
      id: '02',
      name: 'Aplicação do Método',
      description: 'Implemente os templates e estratégias do Turbo Conversão Pro nas suas páginas e campanhas.',
    },
    {
      id: '03',
      name: 'Escala e Otimização',
      description: 'Analise os resultados, faça ajustes finos e aumente o investimento com previsibilidade.',
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Como funciona na prática?</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Um processo simples, direto e focado em resultados reais para o seu negócio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-16 lg:pl-0 lg:pt-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-xl font-bold text-indigo-600 lg:left-0 lg:top-0">
                  {step.id}
                </div>
                <div className="hidden lg:block absolute left-12 top-6 h-px w-[calc(100%-3rem)] bg-slate-200"></div>
                <h3 className="text-xl font-semibold leading-7 text-slate-900 mt-2 lg:mt-6">{step.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
