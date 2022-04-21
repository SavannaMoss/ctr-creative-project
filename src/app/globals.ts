import { Work } from "./models/work";
import { Tag }  from "./models/tag";

export class Globals {
  public static works: Work[] = [
    {
      title: 'White Privilege and Male Privilege',
      author: 'Peggy McIntosh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny', 'privilege']
    },
    {
      title: 'Defining Racism',
      author: 'Beverly Tatum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    // {
    //   name: 'Charles Johnson',
    //   work: {
    //     title: 'Modernity, Philosophy, and Race',
    //     tags: ['race', 'racism']
    //   }
    // },
    // {
    //   name: 'Sojourner Truth',
    //   work: {
    //     title: 'Ain\'t I a Woman? (speech)',
    //     tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny']
    //   }
    // },
    // {
    //   name: 'W.E.B. Du Bois',
    //   work: {
    //     title: 'The Souls of Black Folks',
    //     tags: ['race', 'racism']
    //   }
    // },
    // {
    //   name: 'Frantz Fanon',
    //   work: {
    //     title: 'The Fact of Blackness',
    //     tags: ['race', 'racism']
    //   }
    // },
    // {
    //   name: 'Charles Mills',
    //   work: {
    //     title: 'The Racial Contract',
    //     tags: ['race', 'racism']
    //   }
    // },
    // {
    //   name: 'George Yancy',
    //   work: {
    //     title: 'Black Bodies, White Gazes',
    //     tags: ['race', 'racism']
    //   }
    // },
    // {
    //   name: 'bell hooks',
    //   work: {
    //     title: 'Ain\'t I a Woman?',
    //     tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny']
    //   }
    // },
    // {
    //   name: 'Kimberlé Crenshaw',
    //   work: {
    //     title: 'Demarginalizing Intersection',
    //     tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny', 'intersectionality', 'law', 'philosophy']
    //   }
    // },
    // {
    //   name: 'Boram Jeong',
    //   work: {
    //     title: 'A Phenomenology of Invisibility: On the Absence of Yellow Bodies',
    //     tags: ['race', 'racism']
    //   }
    // },
    // {
    //   name: 'Alia Al-Saji',
    //   work: {
    //     title: 'A Phenomenology of Hesitation',
    //     tags: ['race', 'racism']
    //   }
    // }
  ];

  public static tags: Tag[] = Globals.getAllTags();

  public static getAllTags() {
    let allTags: string[] = [];
    let tags: Tag[] = [];
    let works: Work[] = [];

    // loop through works
    for (let i = 0; i < this.works.length; i++) {
      allTags = allTags.concat(this.works[i].tags);
    }
    // eliminate duplicates
    allTags = [...new Set(allTags)];

    // loop through full list of tags
    for (let i = 0; i < allTags.length; i++) {

      // loop through works
      for (let j = 0; j < this.works.length; j++) {

        // check if this work's tags include the current tag
        if (this.works[j].tags.includes(allTags[i])) {
          works.push(this.works[j]);
        }
      }

      // add the tag + works information to the tags list
      tags.push({
        topic: allTags[i],
        works: works
      });

      // clear the works array for the next tag check
      works = [];
    }

    return tags;
  }
}
