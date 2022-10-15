class CustomError(message, status):
    def __init__(self, message, status):
        self.message = message
        self.status = status
        super().__init__(self.message)
