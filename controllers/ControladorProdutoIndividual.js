app.controller("ControladorProdutoIndividual", function($scope, $routeParams) {
        var produtos = [
            {
                titulo: "Drogarias",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium condimentum placerat. Sed ac erat at elit consequat tincidunt eu vel tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tempus pellentesque finibus. Nulla in quam eu nisl scelerisque varius sed at ante. Proin efficitur tincidunt leo a elementum. Vivamus molestie, orci at porta vehicula, purus felis ornare velit, a tempus odio est vel lacus. Phasellus rutrum nisi a tincidunt tempus. Nulla semper dolor a massa dictum hendrerit. In id diam iaculis, gravida nisi non, placerat nisl. Nunc maximus urna rhoncus condimentum pharetra. Suspendisse vestibulum ante suscipit magna rutrum facilisis."
            },
            {
                titulo: "Supermercados",
                descricao: "Vestibulum cursus leo quam, ut placerat arcu aliquet placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean venenatis neque auctor dignissim rhoncus. Sed faucibus congue est, ut ultrices mauris interdum at. Suspendisse rhoncus augue eget tortor facilisis, eleifend lacinia nisl venenatis. Vestibulum tempus fermentum sollicitudin. Pellentesque metus metus, faucibus at lorem eget, mattis pharetra justo. Cras ut risus mauris. Suspendisse ac efficitur odio."
            },
            {
                titulo: "Padaria e Lanchonetes",
                descricao: "Sed mollis mauris in ultrices pretium. Integer porta posuere laoreet. Nunc vitae risus nec neque interdum placerat sit amet eu massa. Pellentesque ac lacus vel nisi rhoncus bibendum eget pellentesque risus. Nullam ac lectus odio. Nunc quis dui vitae arcu aliquet rutrum vel in est. Aenean vestibulum ligula augue, vitae euismod justo scelerisque ut. Sed vestibulum nunc erat, eu euismod mi aliquet vel."
            },
            {
                titulo: "Postos de Gasolina",
                descricao: "Curabitur eu ornare orci, id accumsan ligula. Quisque ornare est odio, sed condimentum nisi luctus sed. Nunc risus augue, pharetra in placerat eget, iaculis id neque. Nunc suscipit, turpis et gravida efficitur, nulla lorem lobortis urna, in cursus risus purus at augue. Duis mauris leo, convallis ut augue at, mollis mollis metus. Nulla luctus fringilla mattis. Aliquam semper massa ante. Nullam eu luctus nisi. Aenean non tempus ipsum, vel rhoncus metus. Vivamus a ligula tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis id magna lobortis consectetur. Vestibulum iaculis aliquam sapien in facilisis."
            },
            {
                titulo: "Hospitais",
                descricao: "Quisque sit amet scelerisque ligula. Donec sit amet finibus turpis. Integer placerat lorem quis aliquet gravida. Aenean sodales magna sagittis arcu convallis accumsan. Phasellus vitae tincidunt massa. Quisque vel porttitor felis. Vivamus at gravida lorem. Vestibulum id velit ac felis tincidunt porttitor. Pellentesque ut volutpat purus. Aliquam id ultrices libero. Pellentesque aliquet commodo elit et consectetur. Sed magna est, viverra quis tristique non, sollicitudin vitae dolor. Aliquam magna nunc, sagittis vitae lobortis ut, vulputate consectetur ex."
            },
            {
                titulo: "Escolas e Universidades",
                descricao: "Proin varius tortor id suscipit mattis. Vestibulum molestie malesuada aliquam. Nunc risus magna, finibus quis sapien at, laoreet porta libero. Vestibulum a ligula nulla. Nullam scelerisque auctor lectus, ac mollis est condimentum vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis dapibus dui, vitae dictum mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer convallis tellus vel ipsum placerat feugiat. Mauris hendrerit nulla et tempus malesuada. Duis ac mi non dolor imperdiet sodales vitae a nisl. Nunc aliquet lorem lectus, in tempor ipsum volutpat in. Integer accumsan rhoncus justo ac convallis."
            }
        ];

        switch ($routeParams.nomeSistema)
        {
            case "Dograrias":
                $scope.produto = produtos[0];
                break;

            case "Supermercados":
                $scope.produto = produtos[1];
                break;

            case "PadariasLanchonetes":
                $scope.produto = produtos[2];
                break;

            case "PostosGasolina":
                $scope.produto = produtos[3];
                break;

            case "Hospitais":
                $scope.produto = produtos[4];
                break;

            case "EscolasUniversidades":
                $scope.produto = produtos[5];
                break;
        }
    }
);
