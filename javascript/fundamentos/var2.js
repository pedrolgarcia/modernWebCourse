var numero = 1;
{
    var numero = 2;
    console.log("dentro=", numero);
}
console.log("fora=", numero); // Como as variáveis estão no mesmo escopo, a segunda sobrescreveu a primeira pois possuem o mesmo nome