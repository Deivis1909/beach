import "./styles.css"
export default function Filtro (){
return(
<div>
<h3>  Filtro</h3>
<form>
<div>
      <input type="checkbox" id="scales" name="scales" checked></input>
      <label htmlFor="scales">Disponivel</label>
    </div>

    <div>
      <input type="checkbox" id="horns" name="horns"></input>
      <label htmlFor="horns">Não Disponivel</label>
    </div>
</form>

</div>

)


}