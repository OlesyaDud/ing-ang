export class Comment {
    constructor (
        public comment_id: number,
        public p_id: number,
        public text: string,
        public u_id: number
    ) {}
}