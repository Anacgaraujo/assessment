
$('#bottomalign').css('text-align','center')


$(document).ready(() => {

    var isLoading = true;
    var count = 0;

    var countDisplaySelector = document.getElementById('count');
// console.log(countDisplaySelector)

countDisplaySelector.innerHTML = `Loading ammount of InnerBodyHTML Tags`

const handleFetchData = async (url) => {

    const request = await fetch(url);
    const json = await request.json();
    return json;

}
handleFetchData("../test_feed.json").then((data) => {
    isLoading = false;
    const {content} = data;
    const filtered = content.filter((item) => {
        return item.content.bodyHtml
    });
    // console.log(filtered)
    var words = [];
    const tweets = filtered.map((tweet) => {
        return tweet
    }).map((tweet) => {
        var count = JSON.parse(JSON.stringify(tweet.content.bodyHtml));
        var regex = /(<([^>]+)>)/ig

        var labels = tweet.vis
                    // console.log(labels)


                    var data = count
                        .replace(regex, "")
                        // .replace("<a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:27260086\" data-lf-handle=\"\" data-lf-provider=\"twitter\" property=\"url\" href=\"https://twitter.com/#!/justinbieber\" target=\"_blank\" class=\"fyre-mention fyre-mention-twitter\">","")
                        // .replace("@<span property=\"name\">", "")
                        // .replace("</span></a>", "")
                        // .replace("</a>", "")
                        // .replace("<a href=\"https://twitter.com/#!/search/realtime/%23BieberChristmas\" class=\"fyre-hashtag\" hashtag=\"BieberChristmas\" rel=\"tag\" target=\"_blank\">", "")
                        // .replace("<a href=\"https://twitter.com/#!/search/realtime/%23Badday\" class=\"fyre-hashtag\" hashtag=\"Badday\" rel=\"tag\" target=\"_blank\">", "")
                        // .replace("<a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:21111883\" data-lf-handle=\"\" data-lf-provider=\"twitter\" property=\"url\" href=\"https://twitter.com/#!/ddlovato\" target=\"_blank\" class=\"fyre-mention fyre-mention-twitter\">@<span property=\"name\">", "")
                    // console.log(data);

                    data.split(" ").map((word) => {
                        if(!words[word]){
                                            words[word] = { 
                                                word: word,
                                                count: 1
                                            }
                                        }else{
                                            words[word] = {
                                                word: word,
                                                count: words[word].count +1
                                            }
                                        }
                    })     

        // console.log(count)
    })
    // console.log(words)
    const parsedWords = Object.values(words)
    // console.log(parsedWords);

    count = filtered.length

        countDisplaySelector.innerHTML = `There are ${count} InnerBodyHTML Tags on the JSON`

    return data
});


})


