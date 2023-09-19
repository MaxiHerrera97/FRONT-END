export const Alumnos = ({ cohorte, alumnos }) => {


    //const {alumnos, cohorte} = props;
    console.log(alumnos);
    console.log(cohorte);

    return (
        <>
            <h3>Alumnos</h3>
            {alumnos.map(alumno => {
                return (
                 <div>
                    <p>{alumno.name}</p>
                    <span>{alumno.age}</span>
                 </div>
                )
                
            })
         }
        </>
    );
};
export default Alumnos;