export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: '',
                thumbnailImageSrc: 'https://img.freepik.com/fotos-gratis/retrato-da-modelo-afro-americana_23-2149072164.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};
