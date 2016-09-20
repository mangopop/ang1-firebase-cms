//old version
const exampleComponent = {
    template: '<span>Name: {{$ctrl.hero.name}}</span>',
    controller: function () {
    },
    bindings: {
        hero: '='
    }
}

export default {
    name: 'exampleComponent',
    obj: exampleComponent
};

//new version
// class Controller {
//     constructor() {
//     	this.clicked;
//     }

//     $onInit() {
//     	this.clicked = 0;
//     }

//     componentClicked() {
//     	this.clicked++;
//     }
// }

// const ExampleComponent = {
//     template: '<h2>Example Component - click button to increment</h2> <button ng-click="$ctrl.componentClicked()">{{ $ctrl.clicked }}</button>',
//     controller: Controller
// }

// export default {
//   name: 'exampleComponent',
//   obj: ExampleComponent
// };