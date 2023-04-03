import { useEffect, useState } from 'react';
import { usarioComidaDataMutate } from '../../../hooks/usuarioComidaDataMutate';
import { ComidaData } from '../../../interface/ComidaData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [texto, setTexto] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");
    const { mutate, isSuccess, isLoading } = usarioComidaDataMutate();

    const submit = () => {
        const comidaData: ComidaData = {
            texto, 
            preco,
            imagem,
        }
        mutate(comidaData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="texto" value={texto} updateValue={setTexto}/>
                    <Input label="preco" value={preco} updateValue={setPreco}/>
                    <Input label="imagem" value={imagem} updateValue={setImagem}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}