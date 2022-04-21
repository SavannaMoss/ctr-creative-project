import { Work } from "./models/work";
import { Tag }  from "./models/tag";

export class Globals {
  public static works: Work[] = [
    {
      title: 'White Privilege and Male Privilege',
      author: 'Peggy McIntosh',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      source: '',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny', 'privilege']
    },
    {
      title: 'Defining Racism',
      author: 'Beverly Tatum',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      source: '',
      tags: ['race', 'racism']
    },
    {
      title: 'Modernity, Philosophy, and Race',
      author: 'Charles Johnson',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      source: '',
      tags: ['race', 'racism']
    },
    {
      title: 'Ain\'t I a Woman? (speech)',
      author: 'Sojourner Truth',
      unit: 1,
      description: 'At the 1851 Women\'s Rights Convention held in Akron, Ohio, Sojourner Truth delivered what is now recognized as one of the most famous abolitionist and women\'s rights speeches in American history, "Ain\'t I a Woman?" She continued to speak out for the rights of African Americans and women during and after the Civil War.',
      source: 'https://www.nps.gov/articles/sojourner-truth.htm',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny']
    },
    {
      title: 'The Souls of Black Folk',
      author: 'W.E.B. Du Bois',
      unit: 1,
      description: 'The Souls of Black Folk: Essays and Sketches is a 1903 work of American literature by W. E. B. Du Bois. It is a seminal work in the history of sociology and a cornerstone of African-American literature. The book contains several essays on race, some of which had been published earlier in The Atlantic Monthly.',
      source: 'https://en.wikipedia.org/wiki/The_Souls_of_Black_Folk',
      tags: ['race', 'racism']
    },
    {
      title: 'The Fact of Blackness',
      author: 'Frantz Fanon',
      unit: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi sapien, imperdiet ut nulla sed, porttitor efficitur risus. Aliquam erat volutpat.',
      source: '',
      tags: ['race', 'racism']
    },
    {
      title: 'The Racial Contract',
      author: 'Charles Mills',
      unit: 2,
      description: 'The Racial Contract is an essay by the Jamaican-American philosopher Charles W. Mills in which he attempts to show that, although it is conventional to represent the social contract moral and political theories of Thomas Hobbes, John Locke, Jean-Jacques Rousseau, and Immanuel Kant as neutral with respect to race and ethnicity, in actuality, the philosophers understood them to regulate only relations between whites; in relation to non-whites, these philosophers helped to create a "racial contract", which in both formal and informal ways permitted whites to oppress and exploit non-whites and validate their own moral ideals in dealing with non-whites.',
      source: 'https://en.wikipedia.org/wiki/The_Racial_Contract',
      tags: ['race', 'racism']
    },
    {
      title: 'Black Bodies, White Gazes',
      author: 'George Yancy',
      unit: 3,
      description: 'Black Bodies, White Gazes: The Continuing Significance of Race understands Black embodiment within the context of white hegemony within the context of a racist, anti-Black world. George Yancy examines themes such as double consciousness, invisibility, and corporeal malediction that capture the lived reality of Black bodies under tremendous existential duress. He demonstrates that the Black body is a historically lived text on which whites have inscribed their projections which speak equally forcefully to whites\' own self-conceptions.',
      source: 'https://books.google.com/books/about/Black_Bodies_White_Gazes.html?id=iyoonjqA0Z0C&source=kp_book_description',
      tags: ['race', 'racism']
    },
    {
      title: 'Ain\'t I a Woman?',
      author: 'bell hooks',
      unit: 4,
      description: 'Ain\'t I a Woman? Black Women and Feminism is a 1981 book by bell hooks titled after Sojourner Truth\'s "Ain\'t I a Woman?" speech. hooks examines the effect of racism and sexism on Black women, the civil rights movement, and feminist movements from suffrage to the 1970s.',
      source: 'https://en.wikipedia.org/wiki/Ain\'t_I_a_Woman%3F_(book)',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny']
    },
    {
      title: 'Demarginalizing the Intersection of Race and Sex',
      author: 'Kimberlé Crenshaw',
      unit: 4,
      description: 'In this seminal work, Kimberlé Crenshaw introduces the concept of "intersectionality," the intersection and interconnectedness of identities, such as race, gender, ethnicity, sexuality, etc.',
      source: '',
      tags: ['race', 'racism', 'feminism', 'sexism', 'misogyny', 'intersectionality', 'law', 'philosophy']
    },
    {
      title: 'A Phenomenology of Invisibility',
      author: 'Boram Jeong',
      unit: 4,
      description: 'This book chapter aims to elaborate further on the racialization of the visual field by expanding Yancy’s claims on invisibility beyond black bodies, to consider specifically the invisibility of Asian and Asian American "yellow" bodies.',
      source: 'https://ucdenver.academia.edu/BoramJeong',
      tags: ['race', 'racism']
    },
    {
      title: 'A Phenomenology of Hesitation',
      author: 'Alia Al-Saji',
      unit: 4,
      description: 'This paper asks how perception becomes racializing and seeks the means for its critical interruption. My aim is not only to understand the recalcitrant and limitative temporal structure of racializing habits of seeing, but also to uncover the possibilities within perception for a critical awareness and destabilization of this structure. Reading Henri Bergson and Maurice Merleau-Ponty in dialogue with Frantz Fanon, Iris Marion Young and race-critical feminism, I locate in hesitation the phenomenological moment where habits of seeing can be internally fractured. Hesitation, I claim, makes visible the exclusionary logic of racializing and objectifying perception, countering its affective closure and opening it to critical transformation.',
      source: 'https://philpapers.org/rec/ALSAPO-3',
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
