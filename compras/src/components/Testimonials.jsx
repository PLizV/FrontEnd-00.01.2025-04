const data = [
  {name:"Ana", text:"Experiencia de compra excelente, súper rápido y seguro."},
  {name:"Luis", text:"Precios buenazos y atención de 10. Recomendado."},
  {name:"María", text:"El envío llegó antes de lo esperado. Volveré a comprar."},
];

export default function Testimonials(){
  return (
    <section className="py-5">
      <h2 className="h4 mb-3">Lo que dicen nuestros clientes</h2>
      <div className="row g-3">
        {data.map((t,i)=>(
          <div className="col-12 col-md-4" key={i}>
            <div className="card h-100 border-0 card-shadow">
              <div className="card-body">
                <p className="mb-2">“{t.text}”</p>
                <small className="text-secondary">— {t.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
