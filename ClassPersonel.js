class Personal {
    constructor(image, name, gender, taxcode, ranking,seniority) {
        this.id = 0;
        this.image = image;
        this.name = name;
        this.gender = gender;
        this.taxcode = taxcode;
        this.ranking = ranking;
        this.seniority = seniority;

    }
    getHtml(){
        return `
        <tr>
        <td>${this.id + 1}</td>
        <td> <img width="100px" height="auto" src="${this.image}" alt="image"></td>
        <td>${this.name}</td>
        <td>${this.gender}</td>
        <td>${this.taxcode}</td>
        <td>${this.ranking}</td>
        <td>${this.seniority}</td>
        
        <td><button onclick="editPerson(${this.id})">Edit</button></td>
        <td><button onclick="deletePerson(${this.id})">Remove</button></td>
        
        <tr>`;

        
    }
    
    
    }