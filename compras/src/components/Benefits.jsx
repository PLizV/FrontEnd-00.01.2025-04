const list = [
  {icon:"🚀", title:"Envíos rápidos", desc:"Entrega en 24-48h a nivel nacional."},
  {icon:"🔒", title:"Pago seguro", desc:"Tus transacciones siempre protegidas."},
  {icon:"💬", title:"Soporte 24/7", desc:"Estamos contigo cuando nos necesites."},
];

export default function Benefits(){
  return (
    <section className="py-5">
      <div className="row g-4">
        {list.map((b,i)=>(
          <div className="col-12 col-md-4" key={i}>
            <div className="p-4 border rounded h-100">
              <div className="fs-2">{b.icon}</div>
              <h5 className="mt-2">{b.title}</h5>
              <p className="text-secondary m-0">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
