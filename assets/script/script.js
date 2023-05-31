var galleryData = [
  {
    src: "https://media.timeout.com/images/105685403/image.jpg",
    alt: "Stadium 1",
    category: "stadium",
  },
  {
    src: "https://media.gettyimages.com/id/1134433426/photo/exterior-of-new-tottenham-hotspur-stadium-in-london-uk.jpg?s=612x612&w=0&k=20&c=s_0yqnNFrmwPuA6Yzd6rZ8Tn-zaGJX4Ygz6U8iSMdIU=",
    alt: "Stadium 2",
    category: "stadium",
  },
  {
    src: "https://media.gettyimages.com/id/1441134279/photo/a-general-view-of-the-stadium-ahead-of-the-killik-cup-match-between-barbarians-and-new.jpg?s=612x612&w=0&k=20&c=2NtREOuHjwF4rV0V_IaVXCdKuUAdjrxoRwUDfo7ZIAs=",
    alt: "Stadium 3",
    category: "stadium",
  },
  {
    src: "https://media.gettyimages.com/id/1138595183/photo/newly-completed-tottenham-hotspur-stadium-on-march-25-2019-in-london-united-kingdom.jpg?s=612x612&w=0&k=20&c=EvVco1u5U4el_j0WM6R_0bW6zEu5VtVviNR4wMTfU10=",
    alt: "Stadium 4",
    category: "stadium",
  },
  {
    src: "https://media.gettyimages.com/id/1484487861/photo/harry-kane-of-tottenham-hotspur-looks-dejected-after-callum-wilson-of-newcastle-united-scored.jpg?s=612x612&w=0&k=20&c=S5WHF7_Cdq8BvcPJdeupYhSQMYRUZ09gqlVeZwyn3sA=",
    alt: "Player 1",
    category: "players",
  },
  {
    src: "https://media.gettyimages.com/id/1484474210/photo/harry-kane-of-tottenham-hotspur-speaks-to-teammates-after-newcastle-united-scored-their-sides.jpg?s=612x612&w=0&k=20&c=8kE2zZOqDvrvdFLJ4qLOKLbSyZSRdTFatc9AUJeiIhM=",
    alt: "Player 2",
    category: "players",
  },
  {
    src: "https://media.gettyimages.com/id/1237060272/photo/tottenham-hotspurs-lucas-moura-is-congratulated-after-scoring-his-sides-first-goal-during-the.jpg?s=612x612&w=0&k=20&c=IZrBzugpTqFUgjO2yQ9B6Ea-yrGdKjAIR2hn_fdIu_Q=",
    alt: "Player 3",
    category: "players",
  },
  {
    src: "https://media.gettyimages.com/id/1452508289/photo/harry-kane-of-tottenham-hotspur-looks-dejected-after-ivan-toney-of-brentford-scores-their.jpg?s=612x612&w=0&k=20&c=m3WISzz9XWMpCMl1Tw84OsVwJ8VgopxSlhZpotzaAx0=",
    alt: "Player 4",
    category: "players",
  },
  {
    src: "https://media.gettyimages.com/id/1288673684/photo/front-elevation-of-main-entrance-the-new-tottenham-hotspur-stadium-london-united-kingdom.jpg?s=612x612&w=0&k=20&c=LdsR3_6Nsqmz6k5U4bxB6-T5HIk2EaBoVd3gJeT4tZw=",
    alt: "Stadium 5",
    category: "stadium",
  },
  {
    src: "https://media.gettyimages.com/id/1232927525/photo/tottenham-hotspurs-danish-midfielder-pierre-emile-hojbjerg-celebrates-with-teammates-after.jpg?s=612x612&w=0&k=20&c=P3dqT-lDyOf5RIrv5lfkgzh-duncZ8g9HXymEVCVhk8=",
    alt: "Player 5",
    category: "players",
  },
  {
    src: "https://media.gettyimages.com/id/1002481422/photo/an-aerial-view-as-work-continues-on-tottenham-hotspurs-new-stadium-at-white-hart-lane-on-july.jpg?s=612x612&w=0&k=20&c=ME0pFVdYgMB-hQhPHysbHWH9lZRDe7JLxWbXokcFPZg=",
    alt: "Stadium 6",
    category: "stadium",
  },
  {
    src: "https://media.gettyimages.com/id/1474701640/photo/ivan-perisic-of-tottenham-hotspur-celebrates-with-team-mates-after-scoring-the-teams-3rd-goal.jpg?s=612x612&w=0&k=20&c=wPKVIus4wRbeZtbngXwGUzzdDKppweVJG6_iqZzhoKc=",
    alt: "Player 6",
    category: "players",
  },
];

function getGallery(data) {
  var galleryContainer = $("#gallery");
  galleryContainer.empty();
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var galleryItem = $(
      '<div class="col-md-4 col-lg-3 gallery-item ' + item.category + '">'
    );
    var image = $('<img src="' + item.src + '" alt="' + item.alt + '">');
    var caption = $('<div class="caption">' + item.alt + "</div>");
    galleryItem.append(image);
    galleryItem.append(caption);
    galleryContainer.append(galleryItem);
  }
}

$(".filter-button").click(function () {
  var value = $(this).attr("data-filter");
  if (value == "all") {
    getGallery(galleryData);
  } else {
    var filteredData = galleryData.filter(function (item) {
      return item.category == value;
    });
    getGallery(filteredData);
  }
  $(this).addClass("active").siblings().removeClass("active");
});

$("#searchInput").keyup(function () {
  var filter = $(this).val().toUpperCase();
  var filteredData = galleryData.filter(function (item) {
    return item.alt.toUpperCase().indexOf(filter) > -1;
  });

  getGallery(filteredData);
});

getGallery(galleryData);
