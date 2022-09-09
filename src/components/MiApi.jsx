import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";


const baseURL = "https://dummyjson.com/products/"

const MiApi=()=>{
    const [listaProducts, setListaProducts] = useState([]);
    const [filtro, setFiltro] = useState("")

    //para obtener los datos sin filtrar
    useEffect(() => {
        const obtenerDatos = async () => {
            const  resp = await fetch(baseURL)
            const respProductos = await resp.json()
            setListaProducts(respProductos.products)
        }
        obtenerDatos()
    }, []);

    //para cuando quiera filtrar algo con el input
    useEffect(() => {
        const obtenerDatos = async () => {
            let urlFiltro = baseURL
            if(filtro !=="") {
                urlFiltro = baseURL + "category/" + filtro
            }
            const  resp = await fetch(urlFiltro)
            const respProductos = await resp.json()
            setListaProducts(respProductos.products)
        }
        obtenerDatos()
    }, [filtro]);


    const capturarNombre=(e)=>{
        setFiltro(e.target.value)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Form>
                        <Form.Group className="my-3">
                        <Form.Label>Ingresa la categoria que deseas buscar</Form.Label>
                        <Form.Control type="text" value={filtro} onChange={capturarNombre} placeholder="Ej: smartphones" />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Container>
                <Row>
                    <Col/>
                    <Col>
                        <ListGroup id="Lista">
                            {
                                listaProducts.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).map(item => (
                            <ListGroupItem key={item.id}>{item.title}</ListGroupItem>))
                            }
                        </ListGroup>
                    </Col>
                    <Col/>
                </Row>
                </Container>
                
            </Container>
        </>
    );
}

export default MiApi;