function getCardType(cardNumber) {
    const bin = cardNumber.substring(0, 6);
    const cardTypes = [
        { name: "Visa", pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { name: "Mastercard", pattern: /^(5[1-5][0-9]{4}|2[2-7][0-9]{4})[0-9]{10}$/ },
        { name: "American Express", pattern: /^3[47][0-9]{13}$/ },
        { name: "Elo", pattern: /^(401178|431274|5067|627780|636297)[0-9]*$/ },
        { name: "Diners Club", pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { name: "Discover", pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { name: "Hipercard", pattern: /^(38|60)[0-9]{11,17}$/ },
        { name: "JCB", pattern: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { name: "Aura", pattern: /^50[0-9]{14}$/ },
        { name: "UnionPay", pattern: /^(62[0-9]{14,17})$/ },
        { name: "Maestro", pattern: /^(50|56|57|58|6[0-9])[0-9]{10,17}$/ },
        { name: "Cabal", pattern: /^(58|60)[0-9]{14,17}$/ }
    ];

    for (const cardType of cardTypes) {
        if (cardType.pattern.test(cardNumber)) {
            return cardType.name;
        }
    }

    return "Unknown";
}


const cardNumber = "5285155425173975";
console.log(getCardType(cardNumber)); 