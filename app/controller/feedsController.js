const { Feeds } = require("../models/Feeds");
let parseString = require("xml2js").parseString;

module.exports.create = (req, res) => {
  const feeds = req.body.feeds;

  parseString(feeds, function(err, result) {
    result.rss.channel[0].item.map((feed) => {
      let feedData = {
        title: feed.title[0],
        description: feed.description[0],
        link: feed.link[0],
        guid: feed.guid[0],
        pubDate: feed.pubDate[0]
      };

      Feeds.findOne({ title: feedData.title }, function(err, data) {
        if (err) {
          console.log(err);
        }
        if (!data) {
          const feeds = new Feeds(feedData);
          feeds
            .save()
            .then((data) => console.log("data", data))
            .catch((err) => console.log(err));
        }
      });
    });
  });
};

module.exports.list = (req, res) => {
  Feeds.find()
    .then((feeds) => res.json(feeds))
    .catch((err) => console.log(err));
};
