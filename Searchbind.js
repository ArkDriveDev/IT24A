class SearchList{
    constructor(dataUrl1, dataUrl2) {
        this.dataUrls = [dataUrl1, dataUrl2];
        this.classrooms = [];
        this.classes = [];
    }
}

const classList = new ClassList('Pins.json', 'Classes.json');