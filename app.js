var app = angular.module("SLZSistemas", ["ngRoute"]);

//
//Configura as rotas da aplicação
//
app.config(function($routeProvider) {
    //rota principal
    $routeProvider.when(
        "/", 
        {
            templateUrl: "views/inicio.html"
        }
    )

    //rota servicos
    $routeProvider.when(
        "/servicos",
        {
            templateUrl: "views/servicos.html",
            controller: "ControladorServicos"
        }
    )

    //rota produtos
    $routeProvider.when(
        "/produtos",
        {
            templateUrl: "views/produtos.html",
            controller: "ControladorProdutos"
        }
    )

    //rota produtos
    $routeProvider.when(
        "/produto/:nomeSistema",
        {
            templateUrl: "views/produtoIndividual.html",
            controller: "ControladorProdutoIndividual"
        }
    )

    //rota contato
    $routeProvider.when(
        "/contato",
        {
            templateUrl: "views/contato.html"
        }
    )

    //rota sobre
    $routeProvider.when(
        "/sobre",
        {
            templateUrl: "views/sobre.html",
            controller: "ControladorSobre"
        }
    )

    //rota para paginas inexistentes
    $routeProvider.otherwise(
        {
            redirectTo: "views/404.html"
        }
    )
});
