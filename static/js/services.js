// Define the object with the values
var items = {
    health: [
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/419386767_388659410488216_4350675878824941152_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rg0LK8irB_YAb5Sxf5y&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfC81kBh8TfF8rDbORR_BNjoJMAc9_Q_anr3RK25rX9J8g&oe=662D2F60',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/419355444_388659353821555_4849063522805655365_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pDNruOPfkj4Ab69XbPN&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBjmM4T-cp2wDu4G_FuLcKmBcEMzad_dZh5_4MFO3CdtA&oe=662D4560',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/419252677_388659327154891_6110483810398749001_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NRqm2WL3PkEAb7hDZ7j&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAMd6aIkK6pFZ9VC0kPZRj8-Hi2YY7YW6b9SUYlPQOovA&oe=662D3BCC',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/419229684_388659647154859_7903202051074830490_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_HEfrhNs9L8Ab4QRNSB&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfB7-DmWoNGQWNbNTTmePbmGY6sIZgh2GxxKMZwt57asuw&oe=662D2A18',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/419094012_388659533821537_5579880326593454247_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2Nt8fc8-f8YAb6kktd9&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBNAMgdcCeldg6oGvGUvjutkH5dDfHkWLLo1YNS7aUokg&oe=662D3B37'
    ],
    food: [
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/304948977_159922576693159_2027521512132776698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1CMAmJ_w6wIAb7JdhOC&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBI7SmbYTQnKyl61T6WS8l0LaQTNFZy5LwaYOa0rMFaXg&oe=662D1493',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/305968393_159922553359828_1755394772936182180_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R7L4kAQtKFoAb7fzfYF&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfA7FHQkn0DtB6ysyYBWZ0x1Df0CPJ3D5sIM_a7xsJNGeA&oe=662D1368',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/305035915_198031879237842_1224020177172028331_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bM6-el6Bgy8Ab4S8xqe&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAW_9vaMdwfLcPKUoZTHSbP_cxzL8Bo2bgCLzPFCl-CQw&oe=662D1272',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/305880208_198019532572410_8117954956539106740_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=veeL2lE-_nYAb6ZHtRJ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAi4uk2cUgDKhfTy6oY726eSqHGTqbwWfZo6l3d6IZWBA&oe=662D0F96',
    ],
    water: [
        'https://d2nf2tnwikupdj.cloudfront.net/static/imgs/slide3.png',
        'http://localhost:8000/static/imgs/services_page/water.png',
        'https://www.easterneye.biz/wp-content/uploads/2023/03/PAK18_192_WaterAid_-Saiyna-Bashir-scaled.jpg',
    ],
    dastarkhawan: [
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/312747339_206802995027397_5249884025217991506_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WEPi78CobjkAb54zQqe&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDrv8-3nwHWjmTian81KRuzGCnAnpH2cF89RBea_OR8zA&oe=662D1948',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/313027021_206803168360713_4370961430689098992_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ln7aoP175VUAb7fwsaD&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfD_Itsma1mAUgDf8eK4kWhgOCbSdlXooPQBo7KRJrYOzg&oe=662D112A',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/312558992_206803215027375_3773602879306438860_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uGMBEd70Mw0Ab5EQJE7&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfALK5yvTRAIxu-8cUj_l03CW_7o3Pr18WBvfspj6rNfyg&oe=662D21F3',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/293291747_188726206835076_2077909577318109115_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1fIYhLbJOxgAb7tUHAb&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDeDg7hnxreCFdtO5weqx5q2-FZ97DfzFLC1nH4bkYy8Q&oe=662D20B7',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/312263048_206802528360777_6705804710379885883_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qMWrr-ksuVUQ7kNvgEoVU80&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfD5PVzVkQ5KzHKAytsW_Cm-trgVVn-rqFCdts2PQHRwdg&oe=662D1231'
    ],
    tree: [
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random'
    ],
    ramdan: [
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/432778889_433553512665472_4550451673178224989_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7URi1zRbVMsAb5825TP&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAi7O4CiJCYSCTdQqp8ZTezEICm1cWqdoOYmbZi0lZRhQ&oe=662D1E01',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/432260165_424681383552685_4841334439029284053_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N43XJvu165cAb5u08kr&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDmJFMrUFgYFbjZkwO5oUbwGbfwvKrKAEsfaqFwBjH_Kw&oe=662D131C',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/432311228_424681716885985_7729762628890623243_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f9sYHD8bB1gAb6nVk14&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAV-9Oz92F0Q0vgGDCN0xu_jjuU3I9Dbw09jkCdErnsIA&oe=662D0595',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/432778889_433553512665472_4550451673178224989_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7URi1zRbVMsAb5825TP&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAi7O4CiJCYSCTdQqp8ZTezEICm1cWqdoOYmbZi0lZRhQ&oe=662D1E01',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/432133855_424194150268075_8689999295203233538_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bYrorb1adOgAb55feEF&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBhS2irQa3Dt8mDRfOU74bv4ImKuY8G9gSINVa20qXd_Q&oe=662D2A15', 'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/432252145_423006477053509_6850680091818721133_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zRfvNwtxp44Ab6wkHd9&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBq6nFhAHn0bHHX7d50ITQAjhtpB7OiasB3JBbV3luSlg&oe=662D2E7E'
    ],
    drug: [
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random'
    ],
    ambulance: [
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/305297875_200233382351025_2118695689886379023_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wrP0qaZWjDEAb7zRX_g&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDceQFGLbY1zWOtGS2WyaUYQWTscwiADmWKVdL9YM2Ekg&oe=662D336D',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/303668481_200233289017701_6435746702562662769_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gRNMpHNYDMYAb5vUvSk&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfA5br0zl3U720pGZLIYsiKwoeqXrQbhiFbtUKFt2F6jPg&oe=662D10C0',
        'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/296461080_191751073199256_3563248520698023433_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=q7NrfCE9MaIQ7kNvgGEU66V&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAPmXJhZ0lQuUPPsP8H3RIU42xNiXdFf9K7f-kX7R2pgg&oe=662D1149',
    ],

};

// Use jQuery to fetch data based on the clicked element
$('.image-container').click(function () {
    var service = $(this).data('service');
    var data = items[service];
    // Use the fetched data as needed
    // time of 5s
    setTimeout(function () {
        $('#modalSubject').hide();
    }, 2000);


    $('#modalSubject').text('Loading plz wait ...');


    $('#modalHeading').text(service);
    $('#modalContent').empty();
    for (var i = 0; i < data.length; i++) {
        var image = $('<img>').attr('src', data[i]);
        $('#modalContent').append(image);

    }


});
