package core

type OpenGovernmentPortalError struct {
	IsOpenGovernmentPortalError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOpenGovernmentPortalError(code string, msg string, ctx *Context) *OpenGovernmentPortalError {
	return &OpenGovernmentPortalError{
		IsOpenGovernmentPortalError: true,
		Sdk:              "OpenGovernmentPortal",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OpenGovernmentPortalError) Error() string {
	return e.Msg
}
