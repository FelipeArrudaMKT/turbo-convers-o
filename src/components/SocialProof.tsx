export default function SocialProof() {
  const testimonials = [
    {
      body: "A estrutura apresentada mudou completamente a forma como vejo minhas páginas de vendas. É um exemplo perfeito de como organizar a informação para converter.",
      author: {
        name: "Mariana Silva",
        handle: "Empreendedora Digital",
        imageUrl: "https://picsum.photos/seed/mariana/100/100",
      },
    },
    {
      body: "Mesmo sendo uma página de demonstração, os conceitos aplicados aqui são exatamente o que uso nos meus lançamentos. Muito profissional.",
      author: {
        name: "Carlos Eduardo",
        handle: "Especialista em Tráfego",
        imageUrl: "https://picsum.photos/seed/carlos/100/100",
      },
    },
    {
      body: "O design limpo e a copy direta ao ponto são o diferencial. Mostra que não precisamos de promessas falsas para criar algo persuasivo.",
      author: {
        name: "Ana Paula",
        handle: "Copywriter",
        imageUrl: "https://picsum.photos/seed/ana/100/100",
      },
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Depoimentos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            O que dizem sobre o método
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <blockquote className="text-slate-700 leading-7">
                  <p>{`"${testimonial.body}"`}</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-slate-50"
                    src={testimonial.author.imageUrl}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author.name}</div>
                    <div className="text-sm leading-6 text-slate-600">{testimonial.author.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
