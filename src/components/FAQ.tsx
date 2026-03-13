import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Isso é um produto real?",
    answer: "Não. Esta é uma landing page de demonstração criada para ilustrar uma estrutura de alta conversão. O produto 'Turbo Conversão Pro' é fictício.",
  },
  {
    question: "Para quem é este modelo?",
    answer: "Para desenvolvedores, designers e marqueteiros que precisam de uma referência visual e estrutural de como construir uma página de vendas moderna e persuasiva.",
  },
  {
    question: "Preciso saber programar para usar as estratégias?",
    answer: "No contexto do produto fictício, não. O método seria focado em estratégias de marketing e copy. No contexto real desta página, ela foi construída com React e Tailwind CSS.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Como é um produto demonstrativo, não há entrega real. Em um cenário real, o acesso seria enviado para o seu e-mail imediatamente após a confirmação do pagamento.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim, em produtos digitais reais é comum oferecer 7, 15 ou 30 dias de garantia incondicional para aumentar a confiança do comprador.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-slate-900 text-center mb-10">
            Perguntas Frequentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-slate-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-slate-900"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
