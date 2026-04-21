export type Note = {
  id: number;
  entity_type: "trigram" | "hexagram" | "yao";
  entity_id: string;
  note_type: string | null;
  content: string;
  source: string;
};

export type Trigram = {
  id: number;
  chinese: string;
  pinyin: string;
  symbol: string;
  binary: string;
  yin_yang: string;
  nature: string | null;
  virtue: string | null;
  family_role: string | null;
  body_part: string | null;
  animal: string | null;
  element: string | null;
  pre_heaven_position: string | null;
  post_heaven_position: string | null;
  pre_heaven_number: number | null;
  post_heaven_number: number | null;
  color: string | null;
  taste: string | null;
  yao_generation_rule: string | null;
  ni_emphasis: string | null;
  ni_emphasis_source: string | null;
  extras: Record<string, unknown> | null;
  notes: Note[];
};

export type YaoRow = {
  hexagram_id: number;
  position: number;
  yao_type: "yang" | "yin";
  text: string | null;
  xiao_xiang: string | null;
  ni_commentary: string | null;
  xiang_commentary: string | null;
  ni_interpretation: string | null;
  gua_tu_item: string | null;
};

export type Dimaidao = {
  id: number;
  hexagram_id: number;
  occupant: string;
  occupied_position: string;
  precondition: string | null;
  outcomes: string[] | null;
  page_ref: string | null;
};

export type TuanFragment = {
  id: number;
  hexagram_id: number;
  seq: number;
  text: string;
  commentary: string | null;
  source: string;
};

export type Hexagram = {
  id: number;
  chinese: string;
  fullname: string;
  pinyin: string | null;
  upper_trigram: number;
  lower_trigram: number;
  symbol: string;
  binary: string;
  judgment: string | null;
  image: string | null;
  opposite_id: number | null;
  inverse_id: number | null;
  ni_summary: string | null;
  tuan: string | null;
  anecdote: string | null;
  scene: string | null;
  course_name: string | null;
  image_summary: string | null;
  book_commentary: string | null;
  gua_yi: string | null;
  judgment_commentary: string | null;
  image_commentary: string | null;
  wen_yan: string | null;
  yong_text: string | null;
  yong_commentary: string | null;
  yong_xiao_xiang: string | null;
  yong_xiao_xiang_commentary: string | null;
  tuan_fragments: TuanFragment[];
  extras: Record<string, unknown> | null;
  upper_chinese: string;
  upper_symbol: string;
  upper_nature: string;
  upper_pinyin: string;
  lower_chinese: string;
  lower_symbol: string;
  lower_nature: string;
  lower_pinyin: string;
  notes: Note[];
  yao: YaoRow[];
  dimaidao: Dimaidao[];
};
