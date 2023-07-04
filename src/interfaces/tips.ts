export interface ITip {
  title:string,
  content: string,
  id:string
}

export interface ITipsContext {
  tips:ITip[],
  setTips: React.Dispatch<React.SetStateAction<ITip[]>>,
  deleteTip: (tipId: string) => boolean,
  addTip: (tip: ITip) => boolean
}

export interface ITipProp {
  info: ITip,
  style?: string
}