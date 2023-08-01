import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/BtnLoQuiero.css';

const BtnLoQuiero = ({ tipoProducto, idProducto }) => {

    const { user, setUser } = useContext(userContext);


    const navigate = useNavigate();

    const addProduct = () => {
        // const userPivote = user;
        // userPivote[tipoProducto].push(idProducto);
        // setUser(userPivote);

        // const userDestino = [...user.destination]
        // setUser({...user, [tipoProducto]:[...userDestino,idProducto]})

        const userProducto = [...user[tipoProducto]]
        setUser({...user, [tipoProducto]:[...userProducto,idProducto]})


        navigate("/añadidoCesta");
        console.log(user);
    }

    const goToLogin = () => {
        navigate("/login");
    }
    const goToCesta = () => {
        navigate("/confirmarCompra");
    }

    const sessionToken = JSON.parse(sessionStorage.getItem('token'));

    
    const deleteProduct = async () =>{
      console.log(sessionToken);
      console.log(user);
      const response = await fetch(`https://api-node-viajes.vercel.app/${tipoProducto}/${idProducto}`, {
        method: "DELETE",
        headers: {
          Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: {
          toString() {
          return `Bearer ${sessionToken.token || null}`;
    },
  },
        },
        body: JSON.stringify(
          user
        ),
      });
      const res = await response.json();
      console.log(res);
      //alert('Datos actualizados')
    };


    return (
        <>
            <div className="BtnLoQuiero-div">
                {user ?
                    <div>

                        <button className="BtnLoQuiero-btn" onClick={addProduct}
                        >Lo quiero</button>

                        <button className="BtnLoQuiero-btn-02" onClick={goToCesta}
                        >Vé a tu cesta</button>
                    </div>
                    :
                    <button className="BtnLoQuiero-btn" onClick={goToLogin}
                    >Cómpralo!</button>
                }
                {user ? (user.role === "admin" ? <button className="BtnLoQuiero-btn" onClick={deleteProduct}
                    >Borrar</button> : null) : null}

            </div>


        </>
    )
}

export default BtnLoQuiero