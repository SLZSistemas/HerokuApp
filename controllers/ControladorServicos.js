app.controller("ControladorServicos", function($scope){
        $scope.titulo = "Nossos Serviços";

        $scope.servicos = [
            {
                nome: "Sistemas Web",
                descricao: "Sistema de gestão 100% online para você acessar de onde estiver."
            },
            {
                nome: "Aplicativos Móveis",
                descricao: "Aplicativos para os sistemas móveis Android (Google) e iOS (Apple)."
            },
            {
                nome: "Websites, Portais e Blogs",
                descricao: "Sites dos mais diversos formatos para atender as todas as duas necessidades."
            },
            {
                nome: "Projetos Customizados",
                descricao: "Solução 100% customizada para o seu negócio crescer."
            }
        ];
    }
);
