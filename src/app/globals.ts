import { Work } from "./models/work";
import { Tag }  from "./models/tag";

export class Globals {
  public static works: Work[] = [
    {
      title: 'White Privilege and Male Privilege',
      author: 'Peggy McIntosh',
      unit: 1,
      description: 'A chapter in the book <em>On Privilege, Fraudulence, and Teaching as Learning.</em> In this chapter, McIntosh explains how she came to understand privilege systems via her work expanding college curriculum to include women. She reviews several layers of denial that protect and prevent awareness about male privilege and draws parallels, from her own experience, with the denials that protect white privilege. She includes a list of forty-six ordinary and daily examples of white privilege that her African American colleagues do not experience.',
      source: 'https://www.taylorfrancis.com/chapters/mono/10.4324/9781351133791-3/white-privilege-male-privilege-personal-account-coming-see-correspondences-work-women-studies-1988-1-peggy-mcintosh',
      tags: ['anti-Black racism', 'feminism', 'gender', 'misogyny', 'privilege', 'race', 'racism', 'sexism']
    },
    {
      title: 'Defining Racism',
      author: 'Beverly Tatum',
      unit: 1,
      description: 'A chapter in the book <em>Why Are All the Black Kids Sitting Together in the Cafeteria?</em> Walk into any racially mixed high school and you will see Black, White, and Latino youth clustered in their own groups. Is this self-segregation a problem to address or a coping strategy? Beverly Daniel Tatum, a renowned authority on the psychology of racism, argues that straight talk about our racial identities is essential if we are serious about enabling communication across racial and ethnic divides. These topics have only become more urgent as the national conversation about race is increasingly acrimonious. This fully revised edition is essential reading for anyone seeking to understand the dynamics of race in America.',
      source: 'https://www.beverlydanieltatum.com/published-works/',
      tags: ['anti-Black racism', 'law', 'race', 'racism']
    },
    {
      title: 'Modernity, Philosophy, and Race',
      author: 'Clarence Johnson',
      unit: 1,
      description: 'A chapter in the book <em>Cornel West and Philosophy (Africana Thought)</em>. After a brief biographical sketch, Johnson leads us through a comprehensive examination of West\'s philosophy from his conceptions of pragmatism, existentialism, Marxism, and Prophetic Christianity to his persuasive writings on black-Jewish relations, affirmative action, and the role of black intellectuals. Special focus is given to West\'s writings on ethics and social justice, and how these inform his entire theoretical framework.',
      source: 'https://philpapers.org/rec/JOHCW',
      tags: ['anti-Black racism', 'class', 'identity', 'morality', 'philosophy', 'race', 'racism', 'rationality']
    },
    {
      title: 'Ain\'t I a Woman? (speech)',
      author: 'Sojourner Truth',
      unit: 1,
      description: 'At the 1851 Women\'s Rights Convention held in Akron, Ohio, Sojourner Truth delivered what is now recognized as one of the most famous abolitionist and women\'s rights speeches in American history, "Ain\'t I a Woman?" She continued to speak out for the rights of African Americans and women during and after the Civil War.',
      source: 'https://www.nps.gov/articles/sojourner-truth.htm',
      tags: ['anti-Black racism', 'feminism', 'gender', 'misogyny', 'race', 'racism', 'sexism']
    },
    {
      title: 'The Souls of Black Folk',
      author: 'W.E.B. Du Bois',
      unit: 1,
      description: '<em>The Souls of Black Folk: Essays and Sketches</em> is a 1903 work of American literature by W. E. B. Du Bois. It is a seminal work in the history of sociology and a cornerstone of African-American literature. The book contains several essays on race, some of which had been published earlier in <em>The Atlantic Monthly</em>.',
      source: 'https://en.wikipedia.org/wiki/The_Souls_of_Black_Folk',
      tags: ['anti-Black racism', 'double-consciousness', 'identity', 'ontology', 'race', 'racism', 'white gaze/racializing vision']
    },
    {
      title: 'The Fact of Blackness',
      author: 'Frantz Fanon',
      unit: 1,
      description: '<em>The Fact of Blackness: Frantz Fanon and Visual Representation</em> is a collection of essays that create a far-reaching and original dialogue between cultural theory and visual practice. The rich insights which emerge from this collection explain why Frantz Fanon\'s seminal texts of the 1950s and 60s, <em>Black Skin White Masks</em> and <em>The Wretched of the Earth</em>, have re-emerged at the forefront of postcolonial studies. Ranging between the contemporary politics of location, everyday traumas of social inequality, and the structures and technologies of representation, these dialogues re-affirm the contention of Fanon\'s writings: that narrative, the media, image and symbol lie at the very heart of the practice of politics and social knowledge.',
      source: 'https://www.google.com/books/edition/The_Fact_of_Blackness/yGUaAAAAYAAJ?hl=en',
      tags: ['anti-Black racism', 'double-consciousness', 'identity', 'person vs subperson', 'race', 'racism', 'rationality', 'society']
    },
    {
      title: 'The Racial Contract',
      author: 'Charles Mills',
      unit: 2,
      description: '<em>The Racial Contract</em> is an essay by the Jamaican-American philosopher Charles W. Mills in which he attempts to show that, although it is conventional to represent the social contract moral and political theories of Thomas Hobbes, John Locke, Jean-Jacques Rousseau, and Immanuel Kant as neutral with respect to race and ethnicity, in actuality, the philosophers understood them to regulate only relations between whites; in relation to non-whites, these philosophers helped to create a "racial contract", which in both formal and informal ways permitted whites to oppress and exploit non-whites and validate their own moral ideals in dealing with non-whites.',
      source: 'https://en.wikipedia.org/wiki/The_Racial_Contract',
      tags: ['anti-Black racism', 'class', 'empathy', 'epistemology', 'law', 'morality', 'norming/normalization/naturalization', 'ontology', 'person vs subperson', 'philosophy', 'privilege', 'race', 'racism', 'rationality', 'society', 'white supremacy']
    },
    {
      title: 'Black Bodies, White Gazes',
      author: 'George Yancy',
      unit: 3,
      description: '<em>Black Bodies, White Gazes: The Continuing Significance of Race</em> understands Black embodiment within the context of white hegemony within the context of a racist, anti-Black world. George Yancy examines themes such as double consciousness, invisibility, and corporeal malediction that capture the lived reality of Black bodies under tremendous existential duress. He demonstrates that the Black body is a historically lived text on which whites have inscribed their projections which speak equally forcefully to whites\' own self-conceptions.',
      source: 'https://books.google.com/books/about/Black_Bodies_White_Gazes.html?id=iyoonjqA0Z0C&source=kp_book_description',
      tags: ['anti-Black racism', 'docility', 'double-consciousness', 'empathy', 'hypervisibility vs invisibility', 'identity', 'norming/normalization/naturalization', 'objectification', 'ontology', 'phenomenology', 'philosophy', 'race', 'racism', 'white gaze/racializing vision', 'white racist imaginary', 'white supremacy']
    },
    {
      title: 'Ain\'t I a Woman?',
      author: 'bell hooks',
      unit: 4,
      description: '<em>Ain\'t I a Woman? Black Women and Feminism</em> is a 1981 book by bell hooks titled after Sojourner Truth\'s "Ain\'t I a Woman?" speech. hooks examines the effect of racism and sexism on Black women, the civil rights movement, and feminist movements from suffrage to the 1970s.',
      source: 'https://en.wikipedia.org/wiki/Ain\'t_I_a_Woman%3F_(book)',
      tags: ['anti-Black racism', 'docility', 'feminism', 'gender', 'intersectionality', 'misogyny', 'objectification', 'patriarchy', 'race', 'racism', 'sexism']
    },
    {
      title: 'Demarginalizing the Intersection of Race and Sex',
      author: 'Kimberlé Crenshaw',
      unit: 4,
      description: 'In this seminal work, Kimberlé Crenshaw introduces the concept of "intersectionality," the intersection and interconnectedness of identities, such as race, gender, ethnicity, sexuality, etc.',
      source: 'https://instituteforpr.org/demarginalizing-the-intersection-of-race-and-sex/',
      tags: ['anti-Black racism', 'feminism', 'gender', 'identity', 'intersectionality', 'law', 'misogyny', 'patriarchy', 'philosophy', 'politics', 'race', 'racism', 'sexism']
    },
    {
      title: 'A Phenomenology of Invisibility',
      author: 'Boram Jeong',
      unit: 4,
      description: 'This book chapter aims to elaborate further on the racialization of the visual field by expanding Yancy’s claims on invisibility beyond black bodies, to consider specifically the invisibility of Asian and Asian American "yellow" bodies.',
      source: 'https://ucdenver.academia.edu/BoramJeong',
      tags: ['anti-Asian racism', 'hypervisibility vs invisibility', 'morality', 'norming/normalization/naturalization', 'objectification', 'phenomenology', 'philosophy', 'politics', 'race', 'racism', 'white gaze/racializing vision', 'white racist imaginary']
    },
    {
      title: 'A Phenomenology of Hesitation',
      author: 'Alia Al-Saji',
      unit: 4,
      description: 'This paper asks how perception becomes racializing and seeks the means for its critical interruption. My aim is not only to understand the recalcitrant and limitative temporal structure of racializing habits of seeing, but also to uncover the possibilities within perception for a critical awareness and destabilization of this structure. Reading Henri Bergson and Maurice Merleau-Ponty in dialogue with Frantz Fanon, Iris Marion Young and race-critical feminism, I locate in hesitation the phenomenological moment where habits of seeing can be internally fractured. Hesitation, I claim, makes visible the exclusionary logic of racializing and objectifying perception, countering its affective closure and opening it to critical transformation.',
      source: 'https://philpapers.org/rec/ALSAPO-3',
      tags: ['anti-Muslim racism', 'double-consciousness', 'gender', 'norming/normalization/naturalization', 'objectification', 'patriarchy', 'phenomenology', 'philosophy', 'race', 'racism', 'sexism', 'white gaze/racializing vision']
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

    let tagsSorted = tags.sort((a, b) => a.topic.localeCompare(b.topic));

    return tagsSorted;
  }
}
