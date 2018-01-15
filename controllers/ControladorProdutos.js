app.controller("ControladorProdutos", function($scope) {
        $scope.titulo = "Nossos Produtos";

        $scope.produtos = [
            {
                nome: "Drogarias",
                link: "#!/produto/Dograrias"
            },
            {
                nome: "Supermercados",
                link: "#!/produto/Supermercados"
            },
            {
                nome: "Padaria e Lanchonetes",
                link: "#!/produto/PadariasLanchonetes"
            },
            {
                nome: "Postos de Gasolina",
                link: "#!/produto/PostosGasolina"
            },
            {
                nome: "Hospitais",
                link: "#!/produto/Hospitais"
            },
            {
                nome: "Escolas e Universidades",
                link: "#!/produto/EscolasUniversidades"
            }
        ];
    }
);
