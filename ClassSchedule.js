function cal(day, min, hr) {
  if (day == 0) {
    //sun
    return "No Class on Sunday Incomming Class tommorow 8:00 (INTRO TO DIGITAL BUSINESS)";
  }
  if (day == 1) {
    //mon
    if (hr >= 0 && hr <= 7) {
      return "Next INTRO TO DIGITAL BUSINESS";
    } else if (hr >= 8 && hr <= 9) {
      return "Now studying INTRO TO DIGITAL BUSINESS and Next is  MODERN LIFE ANIMATION on 13:00 at RB5301 Room";
    } else if (hr >= 10 && hr <= 12) {
      return "Next MODERN LIFE ANIMATION";
    } else if (hr >= 13 && hr <= 15) {
      if (hr == 13) {
        return "Now studying MODERN LIFE ANIMATION and Next is FUNDAMENTAL ENG on 14:30";
      } else if (hr == 14) {
        if (min > 30) {
          return "Now studying FUNDAMENTAL ENG and No More Class Today";
        } else {
          return "Now studying MODERN LIFE ANIMATION and Next is FUNDAMENTAL ENG on 14:30";
        }
      } else {
        return "Now studying FUNDAMENTAL ENG and No More Class Today";
      }
    } else {
      return "No More Class Today Incomming Class tommorow 8:00 (PROGRAMMING LOGICAL THINKING)";
    }
  }
  if (day == 2) {
    //tue
    if (hr >= 0 && hr <= 7) {
      return "Next PROGRAMMING LOGICAL THINKING on 8:00 at LIC - B208";
    } else if (hr == 8) {
      return "Now studying PROGRAMMING LOGICAL THINKING and Next is PROGRAMMING LOGICAL THINKING on 9:00 at ILC-C309 Room";
    } else if (hr >= 9 && hr <= 10) {
      return "Now studying PROGRAMMING LOGICAL THINKING and Next is CITIZENSHIP on 11:00 (Online)";
    } else if (hr >= 11 && hr <= 12) {
      if (hr == 11) {
        return "Now studying CITIZENSHIP and Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
      } else {
        if (min > 30) {
          return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
        } else {
          return "Now studying CITIZENSHIP and Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
        }
      }
    } else if (hr == 14) {
      if (min > 30) {
        return "Now studying MAN AND THE MODERN WORLD and No More Class Today";
      } else {
        return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
      }
    } else if (hr == 15) {
      return "Now studying MAN AND THE MODERN WORLD and No More Class Today";
    } else {
      return "No More Class Today incommong class on Monday 8:00 (INTRO TO DIGITAL BUSINESS)";
    }
  }
  if (day == 3) {
    //wed
    return "No Class on Wednesday incommong class tomorrow 8:00 (DIGITAL LITERCY)";
  }
  if (day == 4) {
    //thu
    if (hr >= 0 && hr <= 7) {
      return "Next DIGITAL LITERCY on 8:00 at ILC-B203";
    } else if (hr == 8) {
      return "Now studying DIGITAL LITERCY and Next is DIGITAL LITERCY on 9:00 at ILC-C207";
    } else if (hr >= 9 && hr <= 10) {
      return "Now studying DIGITAL LITERCY THINKING and Next is  MODERN LIFE ANIMATION on 13:00 at RB5301";
    } else if (hr >= 13 && hr <= 15) {
      if (min > 30) {
        return "Now studying FUNDAMENTAL ENG and No More Class Today";
      } else {
        return "Now studying MODERN LIFE ANIMATION and Next is FUNDAMENTAL ENG on 14:30";
      }
    } else {
      return "No More Class Today incommong class tomorrow 11:00 (CITIZENSHIP)";
    }
  }
  if (day == 5) {
    //fri
    if (hr >= 0 && hr <= 10) {
      ("Next DIGITAL LITERCY on 8:00 at ILC-B203");
    } else if (hr >= 11 && hr <= 12) {
      if (min > 30) {
        return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
      } else {
        return "Now studying CITIZENSHIP and Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
      }
    } else if (hr >= 13 && hr < 14) {
      return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
    } else if (hr == 14) {
      if (min > 30) {
        return "Now studying MAN AND THE MODERN WORLD and No More Class Today";
      } else {
        return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
      }
    } else if (hr == 15) {
      return "Now studying MAN AND THE MODERN WORLD and No More Class Today";
    } else {
      return "No More Class Today incommong class on Monday 8:00 (INTRO TO DIGITAL BUSINESS)";
    }
  }
  if (day == 6) {
    //sat
    return "No Class on Saturday incommong class on Monday 8:00 (INTRO TO DIGITAL BUSINESS";
  }
}

const Discord = require("discord.js");
  var d = new Date();
  var min = d.getMinutes();
  var hr = d.getHours()+7;
  const day = d.getDay();

  //? test the day
  // var min = 45;
  // var hr = 15;
  // const day = 5;

  if (hr > 24) {
    hr = hr -24
  }
// console.log(`day = ${day} hr = ${hr} mon = ${min}`);
// res = await cal(day, min, hr);

module.exports = (msg) => {
  const emb = new Discord.MessageEmbed()
    .setTitle("Class Schedule")
    .setColor("#0099ff")
    .setAuthor("Maiyai Command", "https://i.imgur.com/W0SR6Rr.jpg")
    .setThumbnail("https://i.imgur.com/XNMs97I.png")
    .addField("# "+"Next Class", cal(day, min, hr))
    .addField("All Schedule Here or Scan QR Code","All Schedule [ClickHere!!](https://qrgo.page.link/SbKHj)" , true)
    .setTimestamp()
    .setFooter("Updated Since 12/6/2021");
  console.log(`sent help request by ${msg.author}`);
  msg.channel.send(emb);
};