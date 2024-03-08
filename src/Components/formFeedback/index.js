import "./formFeedback.css"

export default function FormFeedback() {

    return (
        <form className="formFeedback-component">
            <label className="titulo-formFeedback">Escreva seu Feedback:</label>
            <textarea placeholder="Qual a sua opinião? No que devo me especializar?" className="textarea-formFeedback"></textarea>
            <button type="submit" className="button-formFeedback">Enviar</button>
        </form>
    )
}