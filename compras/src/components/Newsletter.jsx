export default function Newsletter(){
  return (
    <section id="newsletter" className="py-5">
      <div className="p-4 p-md-5 rounded card-shadow text-center" style={{background:"#f6f8ff"}}>
        <h3 className="mb-2">Recibe ofertas y novedades</h3>
        <p className="text-secondary">Suscríbete y entérate primero.</p>
        <form className="row g-2 justify-content-center mt-3">
          <div className="col-12 col-md-4">
            <input type="email" className="form-control form-control-lg" placeholder="Tu correo"/>
          </div>
          <div className="col-12 col-md-auto">
            <button className="btn btn-cta btn-lg w-100" type="button">Suscribirme</button>
          </div>
        </form>
      </div>
    </section>
  );
}
