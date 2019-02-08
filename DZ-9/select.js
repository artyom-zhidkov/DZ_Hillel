function Select(settings) {
    this.isOpen = false;
    this.element = settings.element;
    this.targetElementForRender = document.querySelector(settings.element);
    this.placeholder = settings.placeholder || 'Select Item';
    this.options = settings.options;
    this.selectedValue = this.getOption(settings.defaultKey) || null;
    this.render();

    document.addEventListener('click', (e) => {
        if (e.target.closest(this.element) === null) {
            this.close();
        }
    });
}

Select.prototype.open = function() {
    this.isOpen = true;
    this.render();
}

Select.prototype.close = function() {
    this.isOpen = false;
    this.render();
}

Select.prototype.getOption = function(key) {
    return this.options.find((option) => option.key === key);
}

Select.prototype.getTitleValue = function() {
    return this.selectedValue ? this.selectedValue.value : this.placeholder;
}

Select.prototype.render = function() {
    let titleTemplate = `<div class='title down'>${this.getTitleValue()}</div>`;
    let optionsTemplate = '';
    
    if (this.isOpen) {
        titleTemplate = titleTemplate.replace("title down", "title up");
        optionsTemplate = this.options.map((option) => {
            return `<div class='option' key="${option.key}">${option.value}</div>`;
        }).join('');
        optionsTemplate = '<div class="container">' + optionsTemplate + '</div>'; 
    }
        
    this.targetElementForRender.innerHTML = titleTemplate + optionsTemplate;
    this.addEvents();
}
  
Select.prototype.addEvents = function() {
    const titileElement = this.targetElementForRender.querySelector('.title');
    const container = this.targetElementForRender.querySelector('.container');
    
    titileElement.addEventListener('click', (e) => {
        if (this.isOpen) {
            this.close();
        } else {
            setTimeout( () => {
                this.open();
            });
        }
    });
    if (container) {
        container.addEventListener('click', (e) => {
            const key = event.target.getAttribute('key');
            this.selectedValue = this.getOption(key);
            this.close();
        })
    };
}

Select.prototype.getValue = function() {
    return this.selectedValue;
}

const select1 = new Select({
    element: '#select1',
//    defaultKey: 'ua',
    placeholder: 'Select Country',
    options: [{
    key: 'ua',
    value: 'Ukraine'
    }, {
    key: 'usa',
    value: 'United States'
    }]
});

const opt = [
    {
        key: "key1",
        value: "Option1"
    },
    {
        key: "key2",
        value: "Option2"
    },
    {
        key: "key3",
        value: "Option3"
    },    
];

const select2 = new Select({
    element: '#select2',
    options: opt
});

const select3 = new Select({
    element: '#select3',
//    defaultKey: 'id1',
    placeholder: 'Select Device',
    options: [
        {
        key: 'id1',
        value: 'Smartphone'
        },
        {
        key: 'id2',
        value: 'Computer'
        },
        {
        key: 'id3',
        value: 'Notebook'
        },
        {
        key: 'id4',
        value: 'Pocketbook'
        }
    ]
});