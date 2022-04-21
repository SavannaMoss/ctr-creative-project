import { Work } from "./models/work";
import { Tag }  from "./models/tag";

export class Globals {
  public static works: Work[] = [
    {
      title: 'White Privilege and Male Privilege',
      author: 'Peggy McIntosh',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny', 'privilege']
    },
    {
      title: 'Defining Racism',
      author: 'Beverly Tatum',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'Modernity, Philosophy, and Race',
      author: 'Charles Johnson',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'Ain\'t I a Woman? (speech)',
      author: 'Sojourner Truth',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny']
    },
    {
      title: 'The Souls of Black Folks',
      author: 'W.E.B. Du Bois',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'The Fact of Blackness',
      author: 'Frantz Fanon',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'The Racial Contract',
      author: 'Charles Mills',
      unit: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'Black Bodies, White Gazes',
      author: 'George Yancy',
      unit: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'Ain\'t I a Woman?',
      author: 'bell hooks',
      unit: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny']
    },
    {
      title: 'Demarginalizing Intersection',
      author: 'Kimberlé Crenshaw',
      unit: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny', 'intersectionality', 'law', 'philosophy']
    },
    {
      title: 'A Phenomenology of Invisibility',
      author: 'Boram Jeong',
      unit: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    },
    {
      title: 'A Phenomenology of Hesitation',
      author: 'Alia Al-Saji',
      unit: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      tags: ['race', 'racism']
    }
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
