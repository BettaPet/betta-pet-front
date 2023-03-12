import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { PhotoService } from '../../../services/PhotoService';

const FormLayoutDemo = () => {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)
    }

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card">
                    <div className="mb-3">
                        <Button icon="pi pi-minus" onClick={prev} />
                        <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
                    </div>
                    <Galleria
                    value={images}
                    activeIndex={activeIndex}
                    onItemChange={(e) => setActiveIndex(e.index)}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    style={{ maxWidth: '500px' }}
                />
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Dados do Usuário</h5>
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
