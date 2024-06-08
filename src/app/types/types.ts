type Vocabularies = {
  id: string;
  title: string;
  kanji?: string;
  romaji: string;
  hiragana: string;
  type: string;
  translation?: string[];
  conjugation?: [
    {
      positive: [
        {
          present: string;
          kanji?: string;
          hiragana: string;
          politeness: "formal" | "informal";
          alt?: string[];
        },
        {
          past: string;
          kanji?: string;
          hiragana: string;
          politeness: "formal" | "informal";
          alt?: string[];
        }
      ];
      negative: [
        {
          present: string;
          kanji?: string;
          hiragana: string;
          politeness: "formal" | "informal";
          alt?: string[];
        },
        {
          past: string;
          kanji?: string;
          hiragana: string;
          politeness: "formal" | "informal";
          alt?: string[];
        }
      ];
    }
  ];
  contentDescription: string;
};

type AuthFields = {
  name?: string;
  email: string;
  password?: string;
};

type LoginData = Pick<AuthFields, "email" | "password">;
