import { createSlice } from "@reduxjs/toolkit";

type Evidence = {
  id: number;
  name: string;
  mark: boolean;
};
type Ghosts = {
  id: number;
  name: string;
  history: string;
  evidName: string[];
  marked?: boolean;
};

type ShopState = {
  evidence: Evidence[];
  ghosts: Ghosts[];
};
const initialState: ShopState = {
  evidence: [
    { id: 1, name: "ЕМП 5", mark: false },
    { id: 2, name: "Лазерный проектор", mark: false },
    { id: 3, name: "Отпечатки рук", mark: false },
    { id: 4, name: "Призрачный огонёк", mark: false },
    { id: 5, name: "Записи в блокноте", mark: false },
    { id: 6, name: "Радиоприёмник", mark: false },
    { id: 7, name: "Минусовая температура", mark: false },
  ],
  ghosts: [
    {
      id: 1,
      name: "Дух",
      history: "HHH",
      evidName: ["ЕМП 5", "Записи в блокноте", "Радиоприёмник"],
      marked: true,
    },
    {
      id: 2,
      name: "Мираж",
      history: "HHH",
      evidName: ["ЕМП 5", "Радиоприёмник", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 3,
      name: "Фантом",
      history: "HHH",
      evidName: ["Отпечатки рук", "Радиоприёмник", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 4,
      name: "Полтергейст",
      history: "HHH",
      evidName: ["Отпечатки рук", "Записи в блокноте", "Радиоприёмник"],
      marked: true,
    },
    {
      id: 5,
      name: "Банши",
      history: "HHH",
      evidName: ["Отпечатки рук", "Призрачный огонёк", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 6,
      name: "Джинн",
      history: "HHH",
      evidName: ["ЕМП 5", "Отпечатки рук", "Минусовая температура"],
      marked: true,
    },
    {
      id: 7,
      name: "Мара",
      history: "HHH",
      evidName: ["Записи в блокноте", "Радиоприёмник", "Призрачный огонёк"],
      marked: true,
    },
    {
      id: 8,
      name: "Ревенант",
      history: "HHH",
      evidName: [
        "Записи в блокноте",
        "Минусовая температура",
        "Призрачный огонёк",
      ],
      marked: true,
    },
    {
      id: 9,
      name: "Тень",
      history: "HHH",
      evidName: ["ЕМП 5", "Записи в блокноте", "Минусовая температура"],
      marked: true,
    },
    {
      id: 10,
      name: "Демон",
      history: "HHH",
      evidName: ["Записи в блокноте", "Отпечатки рук", "Минусовая температура"],
      marked: true,
    },
    {
      id: 11,
      name: "Юрэй",
      history: "HHH",
      evidName: [
        "Минусовая температура",
        "Призрачный огонёк",
        "Лазерный проектор",
      ],
      marked: true,
    },
    {
      id: 12,
      name: "Они",
      history: "HHH",
      evidName: ["ЕМП 5", "Минусовая температура", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 13,
      name: "Ёкай",
      history: "HHH",
      evidName: ["Призрачный огонёк", "Радиоприёмник", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 14,
      name: "Ханту",
      history: "HHH",
      evidName: ["Отпечатки рук", "Минусовая температура", "Призрачный огонёк"],
      marked: true,
    },
    {
      id: 15,
      name: "Горё",
      history: "HHH",
      evidName: ["ЕМП 5", "Отпечатки рук", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 16,
      name: "Мюлинг",
      history: "HHH",
      evidName: ["ЕМП 5", "Отпечатки рук", "Записи в блокноте"],
      marked: true,
    },
    {
      id: 17,
      name: "Онрё",
      history: "HHH",
      evidName: ["Радиоприёмник", "Минусовая температура", "Призрачный огонёк"],
      marked: true,
    },
    {
      id: 18,
      name: "Близнецы",
      history: "HHH",
      evidName: ["ЕМП 5", "Радиоприёмник", "Минусовая температура"],
      marked: true,
    },
    {
      id: 19,
      name: "Райдзю",
      history: "HHH",
      evidName: ["ЕМП 5", "Призрачный огонёк", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 20,
      name: "Обакэ",
      history: "HHH",
      evidName: ["ЕМП 5", "Отпечатки рук", "Призрачный огонёк"],
      marked: true,
    },
    {
      id: 21,
      name: "Мимик",
      history: "HHH",
      evidName: ["Отпечатки рук", "Радиоприёмник", "Минусовая температура"],
      marked: true,
    },
    {
      id: 22,
      name: "Морой",
      history: "HHH",
      evidName: ["Радиоприёмник", "Записи в блокноте", "Минусовая температура"],
      marked: true,
    },
    {
      id: 23,
      name: "Деоген",
      history: "HHH",
      evidName: ["Радиоприёмник", "Записи в блокноте", "Лазерный проектор"],
      marked: true,
    },
    {
      id: 24,
      name: "Тайэ",
      history: "HHH",
      evidName: ["Призрачный огонёк", "Записи в блокноте", "Лазерный проектор"],
      marked: true,
    },
  ],
  arr: [],
};

const fazmaSlice = createSlice({
  name: "fazma",
  initialState,
  reducers: {
    Evidenc(state, action) {
      const arr = [];
      state.arr.push(action.payload.name);
      state.evidence.forEach((evid) => {
        if (evid.id === action.payload.id) {
          evid.mark = !evid.mark;
        }
      });
      if (action.payload.mark === true) {
        state.arr.filter((el) => el !== action.payload.name && arr.push(el));
        state.arr = [];
        arr.forEach((el) => state.arr.push(el));
        state.ghosts.forEach((ghost) =>
          state.arr.every((evidence) =>
            ghost.evidName.includes(evidence)
              ? (ghost.marked = true)
              : (ghost.marked = false)
          )
        );
        state.arr.toString() === "" &&
          state.ghosts.map((ghost) => (ghost.marked = true));
      }
      if (action.payload.mark === false) {
        state.ghosts.map((ghost) =>
          ghost.evidName.includes(action.payload.name) && ghost.marked
            ? (ghost.marked = true)
            : (ghost.marked = false)
        );
      }
    },
  },
});
export const { Evidenc } = fazmaSlice.actions;
export default fazmaSlice.reducer;
