import Cards from "./Card";

const card1 = {
    srcImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/A1-Latrun1.jpg/375px-A1-Latrun1.jpg",
    title: "Highway 1",
    description: "is a road from Tel Aviv to Jerusalem. It passes through Israel and the West Bank. It ends at the border with Jordan.",
    hrefShare: "https://help.magisto.com/hc/article_attachments/360014252331/IMG_0008.PNG",
    hrefExplore: "https://simple.wikipedia.org/wiki/Highway_1_(Israel)",
}
const card2 = {
    srcImg: "https://upload.wikimedia.org/wikipedia/commons/6/68/PikiWiki_Israel_2888_Netanya_%D7%92%D7%A9%D7%A8_%D7%94%D7%90%D7%97%D7%93%D7%95%D7%AA.jpg",
    title: "Highway 2",
    description: "is an Israeli highway located on the coastal plain of the Mediterranean Sea. It begins as a major arterial road within Tel Aviv, becoming a freeway as it exits the city northward continuing to Haifa. North of Tel Aviv, the highway is also called The Coastal Highway (Kvish HaHof).",
    hrefShare: "https://help.magisto.com/hc/article_attachments/360014252331/IMG_0008.PNG",
    hrefExplore: "https://en.wikipedia.org/wiki/Highway_2_(Israel)",
}

function CardsEx() {
    return (
        <div>
            <Cards {...card1}/>
            <Cards {...card2}/>
        </div>
    )
}

export default CardsEx;