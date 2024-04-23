angular.module('qrGeneratorApp', [])
.controller('qrGeneratorCtrl', function($scope) {
    $scope.qrText = ''; // Text input for generating QR code
    $scope.generatedQRCode = ''; // Generated QR code will be stored here

    $scope.generateQRCode = function() {
        var qr = qrcode(0, 'M');
        qr.addData($scope.qrText);
        qr.make();
        $scope.generatedQRCode = qr.createDataURL();
    };
});
