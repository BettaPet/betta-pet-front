import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';


const FormLayoutDemo = () => {
    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                <h5 style={{textAlign: 'center'}}>Alex <span style={{color: "orange"}}>Santos</span></h5>
                    <Image src="https://img.freepik.com/fotos-gratis/retrato-da-modelo-afro-americana_23-2149072164.jpg" style={{borderRadius: 100}} alt="Image" width="490" preview />
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Dados do Usuário</h5>
                    <div className="field">
                        <label htmlFor="cpf"></label>
                        <InputText style={{textAlign: 'center'}} placeholder='890.099.998-90' id="cpf" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1"></label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1"></label>
                        <InputText id="age1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1"></label>
                        <InputText id="age1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1"></label>
                        <InputText id="age1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1"></label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Email</h5>
                    <div className="field">
                        <label htmlFor="name1"></label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1"></label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1"></label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Senha</h5>
                    <div className="field">
                        <label htmlFor="name1"></label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1"></label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1"></label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormLayoutDemo;
