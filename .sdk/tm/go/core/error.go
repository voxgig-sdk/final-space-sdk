package core

type FinalSpaceError struct {
	IsFinalSpaceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFinalSpaceError(code string, msg string, ctx *Context) *FinalSpaceError {
	return &FinalSpaceError{
		IsFinalSpaceError: true,
		Sdk:              "FinalSpace",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FinalSpaceError) Error() string {
	return e.Msg
}
